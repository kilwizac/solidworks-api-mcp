---
type: property
interface: IMacroFeatureData
member: GetPropertyManagerHandleProcedureNames
returns: System.Object
parameters:
  -
    name: ModuleName
    type: System.String
    description: Name of the module
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetModuleCount
  - IMacroFeatureData.GetModuleNames
  - IMacroFeatureData.GetProcedureCount
  - IMacroFeatureData.GetProcedureNames
  - IMacroFeatureData.GetPropertyManagerHandleModuleCount
  - IMacroFeatureData.GetPropertyManagerHandleModuleNames
  - IMacroFeatureData.GetPropertyManagerHandleProcedureCount
  - IMacroFeatureData.IGetModuleNames
  - IMacroFeatureData.IGetProcedureNames
  - IMacroFeatureData.IGetPropertyManagerHandleModuleNames
  - IMacroFeatureData.IGetPropertyManagerHandleProcedureNames
  - IMacroFeatureData.MacroFileName
  - IMacroFeatureData.ModuleName
  - IMacroFeatureData.ProcedureName
  - IMacroFeatureData.PropertyManagerHandleMacroFileName
  - IMacroFeatureData.PropertyManagerHandleModuleName
  - IMacroFeatureData.PropertyManagerHandleProcedureName
  - IMacroFeatureData.SecurityHandleMacroFileName
  - IMacroFeatureData.SecurityHandleModuleName
  - IMacroFeatureData.SecurityHandleProcedureName
keywords:
  - getpropertymanagerhandleprocedurenames
  - imacrofeaturedata
  - macro
  - feature
  - data
  - manager
  - handle
  - procedure
  - names
  - module
  - name
  - string
  - object
readonly: null
---

# IMacroFeatureData.GetPropertyManagerHandleProcedureNames

Gets the names of the procedures in the specified module in the macro from the PropertyManager handle for the macro feature.

## Signature

```csharp
System.Object GetPropertyManagerHandleProcedureNames( 
   System.String
ModuleName
)
```
## Parameters

- `ModuleName` (System.String): Name of the module

## Return Value

Array of procedure names

## See Also

- `IMacroFeatureData.GetModuleCount`
- `IMacroFeatureData.GetModuleNames`
- `IMacroFeatureData.GetProcedureCount`
- `IMacroFeatureData.GetProcedureNames`
- `IMacroFeatureData.GetPropertyManagerHandleModuleCount`
- `IMacroFeatureData.GetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureCount`
- `IMacroFeatureData.IGetModuleNames`
- `IMacroFeatureData.IGetProcedureNames`
- `IMacroFeatureData.IGetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.IGetPropertyManagerHandleProcedureNames`
- `IMacroFeatureData.MacroFileName`
- `IMacroFeatureData.ModuleName`
- `IMacroFeatureData.ProcedureName`
- `IMacroFeatureData.PropertyManagerHandleMacroFileName`
- `IMacroFeatureData.PropertyManagerHandleModuleName`
- `IMacroFeatureData.PropertyManagerHandleProcedureName`
- `IMacroFeatureData.SecurityHandleMacroFileName`
- `IMacroFeatureData.SecurityHandleModuleName`
- `IMacroFeatureData.SecurityHandleProcedureName`