---
type: method
interface: IModelDocExtension
member: GetSearchDataCount
returns: System.Int32
parameters:
  -
    name: AppName
    type: System.String
    description: Third-party application name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.AddOrUpdateSearchData
  - IModelDocExtension.DeleteSearchData
  - IModelDocExtension.GetSearchData
keywords:
  - getsearchdatacount
  - imodeldocextension
  - model
  - doc
  - extension
  - search
  - data
  - count
  - app
  - name
  - string
  - int32
---

# IModelDocExtension.GetSearchDataCount

Gets the number of SOLIDWORKS Search keywords for the specified third-party application previously added to this model document.

## Signature

```csharp
System.Int32 GetSearchDataCount( 
   System.String
AppName
)
```
## Parameters

- `AppName` (System.String): Third-party application name

## Return Value

Number of keywords for AppName previously added to this model document

## Remarks

Call this method before calling
IModelDocExtension::IGetSearchData
to determine the size of the arrays for that method.

## See Also

- `IModelDocExtension.AddOrUpdateSearchData`
- `IModelDocExtension.DeleteSearchData`
- `IModelDocExtension.GetSearchData`