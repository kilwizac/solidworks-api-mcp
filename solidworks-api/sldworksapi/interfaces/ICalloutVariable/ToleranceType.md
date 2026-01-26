---
type: property
interface: ICalloutVariable
member: ToleranceType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - tolerancetype
  - icalloutvariable
  - callout
  - variable
  - tolerance
  - type
  - int32
  - hole
  - variables
  - vb
  - net
  - vba
readonly: null
---

# ICalloutVariable.ToleranceType

Gets or sets the type of tolerance for a hole callout.

## Signature

```csharp
System.Int32 ToleranceType {get; set;}
```
## Parameters

None.

## Return Value

Type of tolerance as defined in swTolType_e (see Remarks )

## Remarks

In SOLIDWORKS 2016 and later, use this property to set the type of tolerance for a hole callout. Calling
IDimensionTolerance::Type
to set the type of tolerance for a hole callout does not override this property's setting.
To see the effects of changing the tolerance type, use
IModelView::GraphicsRedraw
.

## Examples

- Get and Set Hole Callout Variables (C#) (Get_and_Set_Hole_Callout_Variables_Example_CSharp.htm)
- Get and Set Hole Callout Variables (VB.NET) (Get_and_Set_Hole_Callout_Variables_Example_VBNET.htm)
- Get and Set Hole Callout Variables (VBA) (Get_and_Set_Hole_Callout_Variables_Example_VB.htm)