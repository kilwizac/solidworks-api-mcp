---
type: method
interface: IMathTransform
member: Multiply
returns: System.Object
parameters:
  -
    name: TransformObjIn
    type: System.Object
    description: Math transform by which to multiply the calling math transform
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMathTransform.IMultiply
keywords:
  - multiply
  - imathtransform
  - math
  - transform
  - obj
  - object
  - components
  - transforms
  - interference
  - detection
  - vb
  - net
  - vba
---

# IMathTransform.Multiply

Multiplies two matrices together.

## Signature

```csharp
System.Object Multiply( 
   System.Object
TransformObjIn
)
```
## Parameters

- `TransformObjIn` (System.Object): Math transform by which to multiply the calling math transform

## Return Value

Newly created math transform object or null or Nothing if the operation fails

## Remarks

The resulting transform is the result of transforming the math transform with respect to the transformObjIn coordinate frame.

## Examples

- Set Components and Transforms for Interference Detection (C#) (Set_Components_and_Transforms_for_Interference_Detection_Example_CSharp.htm)
- Set Components and Transforms for Interference Detection (VB.NET) (Set_Components_and_Transforms_for_Interference_Detection_Example_VBNET.htm)
- Set Components and Transforms for Interference Detection (VBA) (Set_Components_and_Transforms_for_Interference_Detection_Example_VB.htm)

## See Also

- `IMathTransform.IMultiply`