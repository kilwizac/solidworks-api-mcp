---
type: method
interface: IMacroFeatureData
member: IGetProcedureNames
returns: void
parameters:
  -
    name: ModuleName
    type: System.String
    description: Name of module
  -
    name: ProcedureCount
    type: System.Int32
    description: Number of procedures in ModuleName
  -
    name: ProcedureNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of procedure names of size ProcedureCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetModuleCount
  - IMacroFeatureData.GetModuleNames
  - IMacroFeatureData.GetProcedureNames
  - IMacroFeatureData.GetPropertyManagerHandleModuleCount
  - IMacroFeatureData.GetPropertyManagerHandleModuleNames
  - IMacroFeatureData.GetPropertyManagerHandleProcedureCount
  - IMacroFeatureData.GetPropertyManagerHandleProcedureNames
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
  - igetprocedurenames
  - imacrofeaturedata
  - macro
  - feature
  - data
  - procedure
  - names
  - module
  - name
  - string
  - count
  - int32
  - void
---

# IMacroFeatureData.IGetProcedureNames

Gets the names of the procedures in the specified module in the macro for the macro feature.

## Signature

```csharp
void IGetProcedureNames( 
   System.String
ModuleName
,
   System.Int32
ProcedureCount
,
   out System.String
ProcedureNames
)
```
## Parameters

- `ModuleName` (System.String): Name of module
- `ProcedureCount` (System.Int32): Number of procedures in ModuleName
- `ProcedureNames` (System.String): in-process, unmanaged C++: Pointer to an array of procedure names of size ProcedureCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetProcedureCount
to determine the size of the array.

## See Also

- `IMacroFeatureData.GetModuleCount`
- `IMacroFeatureData.GetModuleNames`
- `IMacroFeatureData.GetProcedureNames`
- `IMacroFeatureData.GetPropertyManagerHandleModuleCount`
- `IMacroFeatureData.GetPropertyManagerHandleModuleNames`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureCount`
- `IMacroFeatureData.GetPropertyManagerHandleProcedureNames`
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