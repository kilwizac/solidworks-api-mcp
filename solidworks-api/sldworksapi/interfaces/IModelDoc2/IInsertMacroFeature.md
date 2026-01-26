---
type: method
interface: IModelDoc2
member: IInsertMacroFeature
returns: Feature
parameters:
  -
    name: CmdFile
    type: System.String
    description: 
  -
    name: CmdModule
    type: System.String
    description: 
  -
    name: CmdProcedure
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
    name: ParamTypes
    type: System.Int32
    description: 
  -
    name: ParamValues
    type: System.String
    description: 
  -
    name: PmFile
    type: System.String
    description: 
  -
    name: PmModule
    type: System.String
    description: 
  -
    name: PmProcedure
    type: System.String
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - iinsertmacrofeature
  - imodeldoc2
  - model
  - doc2
  - insert
  - macro
  - feature
  - cmd
  - file
  - string
  - module
  - procedure
  - param
  - count
  - int32
  - names
  - types
  - values
  - pm
---

# IModelDoc2.IInsertMacroFeature

Obsolete. Superseded by IFeatureManager::IInsertMacroFeature3.

## Signature

```csharp
Feature IInsertMacroFeature( 
   System.String
CmdFile
,
   System.String
CmdModule
,
   System.String
CmdProcedure
,
   System.Int32
ParamCount
,
   ref System.String
ParamNames
,
   ref System.Int32
ParamTypes
,
   ref System.String
ParamValues
,
   System.String
PmFile
,
   System.String
PmModule
,
   System.String
PmProcedure
)
```
## Parameters

- `CmdFile` (System.String): 
- `CmdModule` (System.String): 
- `CmdProcedure` (System.String): 
- `ParamCount` (System.Int32): 
- `ParamNames` (System.String): 
- `ParamTypes` (System.Int32): 
- `ParamValues` (System.String): 
- `PmFile` (System.String): 
- `PmModule` (System.String): 
- `PmProcedure` (System.String): 

## Return Value

Unknown.