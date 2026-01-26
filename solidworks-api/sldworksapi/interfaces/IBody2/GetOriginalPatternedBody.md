---
type: method
interface: IBody2
member: GetOriginalPatternedBody
returns: Body2
parameters:
  -
    name: Xform
    type: MathTransform
    description: IMathTransform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - original
  - patterned
  - body
  - pattern
  - getoriginalpatternedbody
  - body2
  - xform
  - math
  - transform
  - vba
  - vb
  - net
---

# IBody2.GetOriginalPatternedBody

Gets the original body from this patterned body. Also gets the transformation of this body with respect to the original body.

## Signature

```csharp
Body2 GetOriginalPatternedBody( 
   out MathTransform
Xform
)
```
## Parameters

- `Xform` (MathTransform): IMathTransform

## Return Value

IBody2

## Examples

- Get Original Body from Pattern Body (VBA) (Get_Original_Body_from_Pattern_Body_Example_VB.htm)
- Get Original Body from Pattern Body (VB.NET) (Get_Original_Body_from_Pattern_Body_Example_VBNET.htm)
- Get Original Body from Pattern Body (C#) (Get_Original_Body_from_Pattern_Body_Example_CSharp.htm)