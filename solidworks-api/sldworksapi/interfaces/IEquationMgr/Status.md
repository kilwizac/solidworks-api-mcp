---
type: property
interface: IEquationMgr
member: Status
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEquationMgr.Add2
  - IEquationMgr.Add3
  - IEquationMgr.ChangeSuppressionForAllConfigurations
  - IEquationMgr.ChangeSuppressionForConfiguration
  - IEquationMgr.Delete
  - IEquationMgr.Equation
  - IEquationMgr.EvaluateAll
  - IEquationMgr.GetCount
keywords:
  - status
  - iequationmgr
  - equation
  - mgr
  - int32
  - values
  - vb
  - net
  - vba
readonly: true
---

# IEquationMgr.Status

Gets the status of the last equation that was executed.

## Signature

```csharp
System.Int32 Status {get;}
```
## Parameters

None.

## Return Value

0-based index of the last equation to successfully execute; -1 if there was an error (see Remarks )

## Remarks

If you call an IEquationMgr method or property that takes the index of an equation as an argument (e.g.,
IEquationMgr::Value
) and call IEquationMgr::Status, then the return value is:
index of the equation if the call is successful.
-1 if there is an error.

## Examples

- Get Equation Values (C#) (Get_Equation_Values_Example_CSharp.htm)
- Get Equation Values (VB.NET) (Get_Equation_Values_Example_VBNET.htm)
- Get Equation Values (VBA) (Get_Equation_Values_Example_VB.htm)

## See Also

- `IEquationMgr.Add2`
- `IEquationMgr.Add3`
- `IEquationMgr.ChangeSuppressionForAllConfigurations`
- `IEquationMgr.ChangeSuppressionForConfiguration`
- `IEquationMgr.Delete`
- `IEquationMgr.Equation`
- `IEquationMgr.EvaluateAll`
- `IEquationMgr.GetCount`