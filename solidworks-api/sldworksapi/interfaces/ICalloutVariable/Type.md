---
type: property
interface: ICalloutVariable
member: Type
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutAngleVariable
  - ICalloutLengthVariable
  - ICalloutStringVariable
keywords:
  - type
  - icalloutvariable
  - callout
  - variable
  - int32
  - hole
  - variables
  - vb
  - net
  - vba
readonly: true
---

# ICalloutVariable.Type

Gets the type of general hole callout variable.

## Signature

```csharp
System.Int32 Type {get;}
```
## Parameters

None.

## Return Value

Type of general hole callout variable as defined in swCalloutVariableType_e

## Remarks

Use
ICalloutVariable::VariableType
to get the type of specific callout variable.

## Examples

- Get and Set Hole Callout Variables (C#) (Get_and_Set_Hole_Callout_Variables_Example_CSharp.htm)
- Get and Set Hole Callout Variables (VB.NET) (Get_and_Set_Hole_Callout_Variables_Example_VBNET.htm)
- Get and Set Hole Callout Variables (VBA) (Get_and_Set_Hole_Callout_Variables_Example_VB.htm)

## See Also

- `ICalloutAngleVariable`
- `ICalloutLengthVariable`
- `ICalloutStringVariable`