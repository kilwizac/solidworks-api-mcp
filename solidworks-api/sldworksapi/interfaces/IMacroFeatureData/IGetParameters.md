---
type: method
interface: IMacroFeatureData
member: IGetParameters
returns: void
parameters:
  -
    name: ParamCount
    type: System.Int32
    description: Number of user-defined parameters
  -
    name: ParamNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of parameter names of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: ParamTypes
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of parameter data types of size paramCount as defined in swMacroFeatureParamType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: ParamValues
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of parameter values of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetDoubleByName
  - IMacroFeatureData.GetIntegerByName
  - IMacroFeatureData.GetParameters
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.ISetParameters
  - IMacroFeatureData.SetParameters
  - IMacroFeatureData.SetStringByName
keywords:
  - igetparameters
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parameters
  - param
  - count
  - int32
  - names
  - string
  - types
  - values
  - void
---

# IMacroFeatureData.IGetParameters

Gets the user-defined parameters.

## Signature

```csharp
void IGetParameters( 
   System.Int32
ParamCount
,
   out System.String
ParamNames
,
   out System.Int32
ParamTypes
,
   out System.String
ParamValues
)
```
## Parameters

- `ParamCount` (System.Int32): Number of user-defined parameters
- `ParamNames` (System.String): in-process, unmanaged C++: Pointer to an array of parameter names of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `ParamTypes` (System.Int32): in-process, unmanaged C++: Pointer to an array of parameter data types of size paramCount as defined in swMacroFeatureParamType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `ParamValues` (System.String): in-process, unmanaged C++: Pointer to an array of parameter values of size ParamCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetParameterCount
to determine the size of the arrays.

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.ISetParameters`
- `IMacroFeatureData.SetParameters`
- `IMacroFeatureData.SetStringByName`