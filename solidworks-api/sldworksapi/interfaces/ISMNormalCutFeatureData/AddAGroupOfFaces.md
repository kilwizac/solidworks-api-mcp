---
type: method
interface: ISMNormalCutFeatureData
member: AddAGroupOfFaces
returns: void
parameters:
  -
    name: FaceArray
    type: System.Object
    description: Array of cut-extrude faces
  -
    name: Error
    type: System.Int32
    description: Error code as defined in swSMNormalCutError_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISMNormalCutFeatureData.RemoveAGroupOfFaces
keywords:
  - addagroupoffaces
  - ismnormalcutfeaturedata
  - ism
  - normal
  - cut
  - feature
  - data
  - add
  - group
  - faces
  - face
  - array
  - object
  - error
  - int32
  - void
  - ifeaturemanager
  - addsmnormalcuttype
---

# ISMNormalCutFeatureData.AddAGroupOfFaces

Obsolete. See ISMNormalCutFeatureData2.

## Signature

```csharp
void AddAGroupOfFaces( 
   System.Object
FaceArray
,
   out System.Int32
Error
)
```
## Parameters

- `FaceArray` (System.Object): Array of cut-extrude faces
- `Error` (System.Int32): Error code as defined in swSMNormalCutError_e

## Return Value

Unknown.

## Remarks

FaceArray contains the non-normal side walls of a cut in a sheet metal part.

## Examples

- IFeatureManager::AddSMNormalCutType (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~AddSMNormalCutType)

## See Also

- `ISMNormalCutFeatureData.RemoveAGroupOfFaces`