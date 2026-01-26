---
type: method
interface: ISimpleFilletFeatureData2
member: GetFaceCount
returns: System.Int32
parameters:
  -
    name: WhichFaceList
    type: System.Int32
    description: Face as defined in swSimpleFilletWhichFaces_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISimpleFilletFeatureData2.GetFaces
  - ISimpleFilletFeatureData2.ISetFaces
  - ISimpleFilletFeatureData2.SetFaces
keywords:
  - getfacecount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - face
  - count
  - which
  - list
  - int32
  - data
  - vb
  - net
  - vba
---

# ISimpleFilletFeatureData2.GetFaceCount

Gets the number of faces on which to create a simple radius fillet.

## Signature

```csharp
System.Int32 GetFaceCount( 
   System.Int32
WhichFaceList
)
```
## Parameters

- `WhichFaceList` (System.Int32): Face as defined in swSimpleFilletWhichFaces_e

## Return Value

Number of faces

## Remarks

Call this method before calling
ISimpleFilletFeatureData2::IGetFaces
to get the size of the array for that method.

## Examples

- Get Data for Simple Fillet (C#) (Get_Data_for_Simple_Fillet_Example_CSharp.htm)
- Get Data for Simple Fillet (VB.NET) (Get_Data_for_Simple_Fillet_Example_VBNET.htm)
- Get Data for Simple Fillet (VBA) (Get_Data_for_Simple_Fillet_Example_VB.htm)

## See Also

- `ISimpleFilletFeatureData2.GetFaces`
- `ISimpleFilletFeatureData2.ISetFaces`
- `ISimpleFilletFeatureData2.SetFaces`