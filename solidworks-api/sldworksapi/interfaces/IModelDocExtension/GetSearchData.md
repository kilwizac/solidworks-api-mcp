---
type: method
interface: IModelDocExtension
member: GetSearchData
returns: System.Int32
parameters:
  -
    name: AppName
    type: System.String
    description: Third-party application name whose keywords to get
  -
    name: AppNames
    type: System.Object
    description: Array of strings of the third-party application name
  -
    name: NodeNames
    type: System.Object
    description: Array of strings of the third-party application name's keywords
  -
    name: NodeValues
    type: System.Object
    description: Array of strings of the third-party application name's keyword values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddOrUpdateSearchData
  - IModelDocExtension.DeleteSearchData
  - IModelDocExtension.GetSearchDataCount
  - IModelDocExtension.IGetSearchData
keywords:
  - search
  - solidworks
  - getsearchdata
  - imodeldocextension
  - model
  - doc
  - extension
  - data
  - app
  - name
  - string
  - names
  - object
  - node
  - values
  - int32
  - third
  - party
  - keywords
  - vba
---

# IModelDocExtension.GetSearchData

Gets the SOLIDWORKS Search, third-party, application keywords from the model document.

## Signature

```csharp
System.Int32 GetSearchData( 
   System.String
AppName
,
   out System.Object
AppNames
,
   out System.Object
NodeNames
,
   out System.Object
NodeValues
)
```
## Parameters

- `AppName` (System.String): Third-party application name whose keywords to get
- `AppNames` (System.Object): Array of strings of the third-party application name
- `NodeNames` (System.Object): Array of strings of the third-party application name's keywords
- `NodeValues` (System.Object): Array of strings of the third-party application name's keyword values

## Return Value

Number of third-party application name's keywords

## Examples

- Get SOLIDWORKS Search Third-party Keywords (VBA) (Get_SOLIDWORKS_Search_Third-party_Keywords_Example_VB.htm)

## See Also

- `IModelDocExtension.AddOrUpdateSearchData`
- `IModelDocExtension.DeleteSearchData`
- `IModelDocExtension.GetSearchDataCount`
- `IModelDocExtension.IGetSearchData`