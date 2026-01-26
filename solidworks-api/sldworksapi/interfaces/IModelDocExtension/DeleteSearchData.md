---
type: method
interface: IModelDocExtension
member: DeleteSearchData
returns: System.Boolean
parameters:
  -
    name: AppName
    type: System.String
    description: Application name whose keywords to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddOrUpdateSearchData
  - IModelDocExtension.GetSearchData
  - IModelDocExtension.GetSearchDataCount
  - IModelDocExtension.IGetSearchData
keywords:
  - search
  - solidworks
  - deletesearchdata
  - imodeldocextension
  - model
  - doc
  - extension
  - delete
  - data
  - app
  - name
  - string
  - boolean
---

# IModelDocExtension.DeleteSearchData

Deletes the specified SOLIDWORKS Search third-party keywords from the model document.

## Signature

```csharp
System.Boolean DeleteSearchData( 
   System.String
AppName
)
```
## Parameters

- `AppName` (System.String): Application name whose keywords to delete

## Return Value

True if the keywords for AppName are deleted, false if not

## See Also

- `IModelDocExtension.AddOrUpdateSearchData`
- `IModelDocExtension.GetSearchData`
- `IModelDocExtension.GetSearchDataCount`
- `IModelDocExtension.IGetSearchData`