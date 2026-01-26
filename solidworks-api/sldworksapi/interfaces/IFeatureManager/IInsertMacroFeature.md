---
type: method
interface: IFeatureManager
member: IInsertMacroFeature
returns: Feature
parameters:
  -
    name: BaseName
    type: System.String
    description: 
  -
    name: ProgId
    type: System.String
    description: 
  -
    name: MacroMethods
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
    name: EditBody
    type: Body2
    description: 
  -
    name: Options
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - iinsertmacrofeature
  - ifeaturemanager
  - feature
  - manager
  - insert
  - macro
  - base
  - name
  - string
  - prog
  - id
  - methods
  - param
  - count
  - int32
  - names
  - types
  - values
  - edit
  - body
  - body2
  - options
---

# IFeatureManager.IInsertMacroFeature

Obsolete. Superseded by IFeatureManager::IInsertMacroFeature3.

## Signature

```csharp
Feature IInsertMacroFeature( 
   System.String
BaseName
,
   System.String
ProgId
,
   ref System.String
MacroMethods
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
   Body2
EditBody
,
   System.Int32
Options
)
```
## Parameters

- `BaseName` (System.String): 
- `ProgId` (System.String): 
- `MacroMethods` (System.String): 
- `ParamCount` (System.Int32): 
- `ParamNames` (System.String): 
- `ParamTypes` (System.Int32): 
- `ParamValues` (System.String): 
- `EditBody` (Body2): 
- `Options` (System.Int32): 

## Return Value

Unknown.