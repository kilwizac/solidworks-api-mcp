---
type: method
interface: IConvertSolidFeatureData
member: SetFixedFace
returns: void
parameters:
  -
    name: FaceIn
    type: System.Object
    description: IFace2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IConvertSolidFeatureData.GetFixedFace
keywords:
  - setfixedface
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - fixed
  - face
  - object
  - void
---

# IConvertSolidFeatureData.SetFixedFace

Sets the face that remains in place when the part is flattened in this convert solid feature.

## Signature

```csharp
void SetFixedFace( 
   System.Object
FaceIn
)
```
## Parameters

- `FaceIn` (System.Object): IFace2

## Return Value

Unknown.

## Examples

- IConvertSolidFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConvertSolidFeatureData)

## See Also

- `IConvertSolidFeatureData.GetFixedFace`