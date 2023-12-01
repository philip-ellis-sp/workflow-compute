import {
    Context,
    createConnector,
    readConfig,
    Response,
    logger,
    StdAccountListOutput,
    StdAccountReadInput,
    StdAccountReadOutput,
    StdTestConnectionOutput,
    StdAccountListInput,
    StdAccountDisableInput,
    StdAccountDisableOutput,
    createConnectorCustomizer,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

// Connector must be exported as module property named connector
export const connector = async () => {

    // Get connector source config
    const config = await readConfig()

    // Use the vendor SDK, or implement own client as necessary, to initialize a client
    const myClient = new MyClient(config)

    return createConnector()
        .stdTestConnection(async (context: Context, input: any, res: Response<StdTestConnectionOutput>) => {
            logger.info("Running test connection" + JSON.stringify(input))
            res.send({})
        })
        .stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {
            for(let i = 0; i < 5; i++)
            {

                res.send({
                    identity: 'workflow-identity',
                    uuid: 'workflow-identity',
                    attributes: {
                        display: 'Workflow Identity',
                        id: 'workflow-identity'
                    },
                })
            
            }
            logger.info(`stdAccountList sent account`)
            //return new Promise(resolve => setTimeout(resolve, 3000))
        })
        .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {
            res.send({
                identity: 'workflow-identity',
                uuid: 'workflow-identity',
                attributes: {
                    display: 'Workflow Identity',
                    id: 'workflow-identity'
                },
            })
            logger.info(`stdAccountList sent account`)

        })
        .stdAccountDisable(async (context: Context, input: StdAccountDisableInput, res: Response<StdAccountDisableOutput>) => {
            logger.info(`stdAccountList called disable account with values '${input}`)
        })
}









