---
type: method
interface: IMacroFeatureData
member: GetModuleCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetModuleNames
  - IMacroFeatureData.GetProcedureCount
  - IMacroFeatureData.GetProcedureNames
  - IMacroFeatureData.GetPropertyManagerHandleModuleCount
  - IMacroFeatureData.GetPropertyManagerHandleModuleNames
  - IMacroFeatureData.GetPropertyManagerHandleProcedureCount
  - IMacroFeatureData.GetPropertyManagerHandleProcedureNames
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
  - getmodulecount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - module
  - count
  - int32
---

# IMacroFeatureData.GetModuleCount

Gets the number of modules for the macro feature.

## Signature

```csharp
System.Int32 GetModuleCount()
```
## Parameters

None.

## Return Value

Number of modules

## Remarks

Call this method before calling
IMacroFeatureData::IGetModuleNames
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.GetModuleNames`
- `IMacroFeatureData.GetProcedureCount`
- `IMacroFeatureData.GetProcedureNames`
- `IMacroFeatureData.GetPropertyManagerHandleModuleCount`
- `IMacroFeatureData.GetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureCount`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureNames`
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