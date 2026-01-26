---
type: property
interface: ICalloutLengthVariable
member: Precision
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutLengthVariable.TolerancePrecision
keywords:
  - precision
  - icalloutlengthvariable
  - callout
  - length
  - variable
  - int32
  - hole
  - variables
  - vb
  - net
  - vba
readonly: null
---

# ICalloutLengthVariable.Precision

Gets or sets number of digits after the decimal point to display the primary precision value for a length variable in a hole callout.

## Signature

```csharp
System.Int32 Precision {get; set;}
```
## Parameters

None.

## Return Value

Number of digits after the decimal point to display the primary precision value

## Remarks

Call
IDisplayDimension::SetPrecision3
to set the dual precision value for a display dimension for a hole callout.

## Examples

- Get and Set Hole Callout Variables (C#) (Get_and_Set_Hole_Callout_Variables_Example_CSharp.htm)
- Get and Set Hole Callout Variables (VB.NET) (Get_and_Set_Hole_Callout_Variables_Example_VBNET.htm)
- Get and Set Hole Callout Variables (VBA) (Get_and_Set_Hole_Callout_Variables_Example_VB.htm)

## See Also

- `ICalloutLengthVariable.TolerancePrecision`