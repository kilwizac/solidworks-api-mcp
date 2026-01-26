---
type: method
interface: IModelDoc2
member: IAddOrEditConfiguration
returns: System.Int32
parameters:
  -
    name: ConfigName
    type: System.String
    description: 
  -
    name: ParamCount
    type: System.Int32
    description: 
  -
    name: ParamNames
    type: System.String
    description: 
  -
    name: ParamValues
    type: System.String
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - iaddoreditconfiguration
  - imodeldoc2
  - model
  - doc2
  - add
  - edit
  - configuration
  - config
  - name
  - string
  - param
  - count
  - int32
  - names
  - values
---

# IModelDoc2.IAddOrEditConfiguration

Obsolete. Superseded by IConfiguraiton::GetParameters, IConfiguration::IGetParameters, IConfiguration::ISetParameters, and IConfiguration::SetParameters.

## Signature

```csharp
System.Int32 IAddOrEditConfiguration( 
   System.String
ConfigName
,
   System.Int32
ParamCount
,
   ref System.String
ParamNames
,
   ref System.String
ParamValues
)
```
## Parameters

- `ConfigName` (System.String): 
- `ParamCount` (System.Int32): 
- `ParamNames` (System.String): 
- `ParamValues` (System.String): 

## Return Value

Unknown.