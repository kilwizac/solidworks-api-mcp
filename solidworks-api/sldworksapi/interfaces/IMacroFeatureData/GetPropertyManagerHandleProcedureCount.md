---
type: property
interface: IMacroFeatureData
member: GetPropertyManagerHandleProcedureCount
returns: System.Int32
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
  - IMacroFeatureData.GetProcedureNames
  - IMacroFeatureData.GetPropertyManagerHandleModuleCount
  - IMacroFeatureData.GetPropertyManagerHandleModuleNames
  - IMacroFeatureData.GetPropertyManagerHandleProcedureNames
  - IMacroFeatureData.IGetModuleNames
  - IMacroFeatureData.IGetProcedureNames
  - IMacroFeatureData.IGetPropertyManagerHandleModuleNames
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
  - getpropertymanagerhandleprocedurecount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - manager
  - handle
  - procedure
  - count
  - module
  - name
  - string
  - int32
readonly: null
---

# IMacroFeatureData.GetPropertyManagerHandleProcedureCount

Gets the number of procedures in the specified module in the macro from the PropertyManager handle for this macro feature.

## Signature

```csharp
System.Int32 GetPropertyManagerHandleProcedureCount( 
   System.String
ModuleName
)
```
## Parameters

- `ModuleName` (System.String): Name of module

## Return Value

Number of procedures in module ModuleName

## Remarks

Call this method before calling
IMacroFeatureData::IGetPropertyManagerHandleProcedureNames
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.GetModuleCount`
- `IMacroFeatureData.GetModuleNames`
- `IMacroFeatureData.GetProcedureCount`
- `IMacroFeatureData.GetProcedureNames`
- `IMacroFeatureData.GetPropertyManagerHandleModuleCount`
- `IMacroFeatureData.GetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureNames`
- `IMacroFeatureData.IGetModuleNames`
- `IMacroFeatureData.IGetProcedureNames`
- `IMacroFeatureData.IGetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.MacroFileName`
- `IMacroFeatureData.ModuleName`
- `IMacroFeatureData.ProcedureName`
- `IMacroFeatureData.PropertyManagerHandleMacroFileName`
- `IMacroFeatureData.PropertyManagerHandleModuleName`
- `IMacroFeatureData.PropertyManagerHandleProcedureName`
- `IMacroFeatureData.SecurityHandleMacroFileName`
- `IMacroFeatureData.SecurityHandleModuleName`
- `IMacroFeatureData.SecurityHandleProcedureName`