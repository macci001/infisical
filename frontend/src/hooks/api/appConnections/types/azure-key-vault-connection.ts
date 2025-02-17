import { AppConnection } from "@app/hooks/api/appConnections/enums";
import { TRootAppConnection } from "@app/hooks/api/appConnections/types/root-connection";

export enum AzureKeyVaultConnectionMethod {
  OAuth = "oauth"
}

export type TAzureKeyVaultConnection = TRootAppConnection & { app: AppConnection.AzureKeyVault } & {
  method: AzureKeyVaultConnectionMethod.OAuth;
  credentials: {
    code: string;
    tenantId?: string;
  };
};
