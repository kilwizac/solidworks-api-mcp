---
type: method
interface: IFace2
member: IsSame
returns: System.Boolean
parameters:
  -
    name: FaceIn
    type: System.Object
    description: Face to which to compare this face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.IIsSame
keywords:
  - issame
  - iface2
  - face2
  - same
  - face
  - object
  - boolean
  - gusset
  - feature
  - data
  - vb
  - net
  - vba
---

# IFace2.IsSame

Gets whether the two faces are the same.

## Signature

```csharp
System.Boolean IsSame( 
   System.Object
FaceIn
)
```
## Parameters

- `FaceIn` (System.Object): Face to which to compare this face

## Return Value

True if the two faces are the same, false if they are different

## Examples

- Get Gusset Feature Data (C#) (Get_Gusset_Feature_Data_Example_CSharp.htm)
- Get Gusset Feature Data (VB.NET) (Get_Gusset_Feature_Data_Example_VBNET.htm)
- Get Gusset Feature Data (VBA) (Get_Gusset_Feature_Data_Example_VB.htm)

## See Also

- `IFace2.IIsSame`