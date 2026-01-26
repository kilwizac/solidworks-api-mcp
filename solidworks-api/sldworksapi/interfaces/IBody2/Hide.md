---
type: method
interface: IBody2
member: Hide
returns: void
parameters:
  -
    name: Part
    type: System.Object
    description: IModelDoc2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IHide
keywords:
  - temporary
  - bodies
  - see
  - also
  - ibody2
  - hide
  - body2
  - part
  - object
  - void
  - cut
  - body
  - half
  - using
  - macro
  - feature
  - vba
  - create
  - convert
  - non
  - manifold
  - vb
  - net
---

# IBody2.Hide

Hides this temporary body in the context of the specified part.

## Signature

```csharp
void Hide( 
   System.Object
Part
)
```
## Parameters

- `Part` (System.Object): IModelDoc2

## Return Value

Unknown.

## Remarks

While SOLIDWORKS is displaying your IBody2 object using
IBody2::Display3
, you cannot release it explicitly or implicitly. Before releasing or allowing your IBody2 object to be released, you must call this method to prevent it from being displayed.
COM applications should avoid explicitly releasing the IBody2 object by calling IBody2->Release() while it is being displayed by SOLIDWORKS. Dispatch applications should avoid allowing the IBody2 object to go out of scope while it is being displayed by SOLIDWORKS, and be destroyed when the ReleaseDispatch method is called automatically. Dispatch applications should also avoid explicitly releasing the IBody2 object by calling ReleaseDispatch while it is being displayed by SOLIDWORKS.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)
- Create and Convert Non-manifold Bodies (C#) (Create_and_Convert_Non-manifold_Bodies_Example_CSharp.htm)
- Create and Convert Non-manifold Bodies (VB.NET) (Create_and_Convert_Non-manifold_Bodies_Example_VBNET.htm)
- Create and Convert Non-manifold Bodies (VBA) (Create_and_Convert_Non-manifold_Bodies_Example_VB.htm)

## See Also

- `IBody2.IHide`