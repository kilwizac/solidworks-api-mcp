---
type: method
interface: IModelDocExtension
member: IGetSearchData
returns: void
parameters:
  -
    name: AppName
    type: System.String
    description: Third-party application name whose keywords to get
  -
    name: Count
    type: System.Int32
    description: Number of third-party application keywords
  -
    name: AppNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the third-party application names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: NodeNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the third-party application name's keywords VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: NodeValues
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the third-party application name's keyword values VBA, VB.NET, C#, and C++/CLI: Not supported
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
  - search
  - solidworks
  - igetsearchdata
  - imodeldocextension
  - model
  - doc
  - extension
  - data
  - app
  - name
  - string
  - count
  - int32
  - names
  - node
  - values
  - void
---

# IModelDocExtension.IGetSearchData

Gets the SOLIDWORKS Search, third-party, application keywords from the model document.

## Signature

```csharp
void IGetSearchData( 
   System.String
AppName
,
   System.Int32
Count
,
   out System.String
AppNames
,
   out System.String
NodeNames
,
   out System.String
NodeValues
)
```
## Parameters

- `AppName` (System.String): Third-party application name whose keywords to get
- `Count` (System.Int32): Number of third-party application keywords
- `AppNames` (System.String): in-process, unmanaged C++: Pointer to an array of the third-party application names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `NodeNames` (System.String): in-process, unmanaged C++: Pointer to an array of the third-party application name's keywords VBA, VB.NET, C#, and C++/CLI: Not supported
- `NodeValues` (System.String): in-process, unmanaged C++: Pointer to an array of the third-party application name's keyword values VBA, VB.NET, C#, and C++/CLI: Not supported

## Return Value

Number of third-party application name's keywords

## Remarks

Before calling this method, call
IModelDocExtension::GetSearchDataCount
to get the value of Count.

## See Also

- `IModelDocExtension.AddOrUpdateSearchData`
- `IModelDocExtension.DeleteSearchData`
- `IModelDocExtension.GetSearchData`