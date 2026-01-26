---
type: method
interface: IMacroFeatureData
member: GetProcedureNames
returns: System.Object
parameters:
  -
    name: ModuleName
    type: System.String
    description: Name of module
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetModuleCount
  - IMacroFeatureData.GetModuleNames
  - IMacroFeatureData.GetProcedureCount
  - IMacroFeatureData.GetPropertyManagerHandleModuleCount
  - IMacroFeatureData.GetPropertyManagerHandleModuleNames
  - IMacroFeatureData.GetPropertyManagerHandleProcedureCount
  - IMacroFeatureData.GetPropertyManagerHandleProcedureNames
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
  - getprocedurenames
  - imacrofeaturedata
  - macro
  - feature
  - data
  - procedure
  - names
  - module
  - name
  - string
  - object
---

# IMacroFeatureData.GetProcedureNames

Gets the names of the procedures in the specified module for the macro for the macro feature.

## Signature

```csharp
System.Object GetProcedureNames( 
   System.String
ModuleName
)
```
## Parameters

- `ModuleName` (System.String): Name of module

## Return Value

Array of procedure names in module ModuleName

## See Also

- `IMacroFeatureData.GetModuleCount`
- `IMacroFeatureData.GetModuleNames`
- `IMacroFeatureData.GetProcedureCount`
- `IMacroFeatureData.GetPropertyManagerHandleModuleCount`
- `IMacroFeatureData.GetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureCount`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureNames`
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