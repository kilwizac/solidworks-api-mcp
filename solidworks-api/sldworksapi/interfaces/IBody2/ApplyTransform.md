---
type: method
interface: IBody2
member: ApplyTransform
returns: System.Boolean
parameters:
  -
    name: Xform
    type: MathTransform
    description: Transform to apply
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - transform
  - apply
  - bodies
  - applytransform
  - ibody2
  - body2
  - xform
  - math
  - boolean
  - check
  - interference
  - vba
  - combine
  - assembly
  - components
  - part
  - cut
  - body
  - half
  - using
  - macro
  - feature
---

# IBody2.ApplyTransform

Applies a transform to this body.

## Signature

```csharp
System.Boolean ApplyTransform( 
   MathTransform
Xform
)
```
## Parameters

- `Xform` (MathTransform): Transform to apply

## Return Value

True if the transform is successfully applied, false if not

## Remarks

By design, a temporary body is added to the part and displayed in the assembly. The origin of the temporary body is relative to the part instead of the assembly. As a work-around, insert an interim part in the assembly with the origin aligned with the assembly and add the temporary body to the interim part.

## Examples

- Check Interference (VBA) (Check_Interference_using_Modeler_CheckInterference_Example_VB.htm)
- Combine Assembly Components into Part (VBA) (Combine_Assembly_Components_into_Part_Example_VB.htm)
- Cut Body in Half using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)