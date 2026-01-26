---
type: method
interface: IMacroFeatureData
member: IGetModuleNames
returns: void
parameters:
  -
    name: ModuleCount
    type: System.Int32
    description: Number of modules in the macro
  -
    name: ModuleNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the modules of size ModuleCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IMacroFeatureData.ModuleName
  - IMacroFeatureData.ProcedureName
  - IMacroFeatureData.PropertyManagerHandleMacroFileName
  - IMacroFeatureData.PropertyManagerHandleModuleName
  - IMacroFeatureData.PropertyManagerHandleProcedureName
  - IMacroFeatureData.SecurityHandleMacroFileName
  - IMacroFeatureData.SecurityHandleModuleName
  - IMacroFeatureData.SecurityHandleProcedureName
keywords:
  - igetmodulenames
  - imacrofeaturedata
  - macro
  - feature
  - data
  - module
  - names
  - count
  - int32
  - string
  - void
---

# IMacroFeatureData.IGetModuleNames

Gets the names of the modules in the macro for the macro feature.

## Signature

```csharp
void IGetModuleNames( 
   System.Int32
ModuleCount
,
   out System.String
ModuleNames
)
```
## Parameters

- `ModuleCount` (System.Int32): Number of modules in the macro
- `ModuleNames` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the modules of size ModuleCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetModuleCount
to determine the size of the array.

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
- `IMacroFeatureData.ModuleName`
- `IMacroFeatureData.ProcedureName`
- `IMacroFeatureData.PropertyManagerHandleMacroFileName`
- `IMacroFeatureData.PropertyManagerHandleModuleName`
- `IMacroFeatureData.PropertyManagerHandleProcedureName`
- `IMacroFeatureData.SecurityHandleMacroFileName`
- `IMacroFeatureData.SecurityHandleModuleName`
- `IMacroFeatureData.SecurityHandleProcedureName`