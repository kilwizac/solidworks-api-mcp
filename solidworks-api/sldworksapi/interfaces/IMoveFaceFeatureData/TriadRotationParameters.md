---
type: property
interface: IMoveFaceFeatureData
member: TriadRotationParameters
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.IGetTriadRotationParameters
  - IMoveFaceFeatureData.ISetTriadRotationParameters
keywords:
  - triadrotationparameters
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - triad
  - rotation
  - parameters
  - object
  - rotate
  - vb
  - net
  - vba
readonly: null
---

# IMoveFaceFeatureData.TriadRotationParameters

Gets or sets the rotation parameters for this Move Face feature.

## Signature

```csharp
System.Object TriadRotationParameters {get; set;}
```
## Parameters

None.

## Return Value

Array of six doubles (see Remarks )

## Remarks

The first three doubles are the X, Y, and Z rotation origin parameters. The remaining three doubles are the X, Y, and Z rotation angle parameters.

## Examples

- Rotate Move Face Feature (VB.NET) (Rotate_Move_Face_Feature_Example_VBNET.htm)
- Rotate Move Face Feature (VBA) (Rotate_MoveFace_Feature_Example_VB.htm)
- Rotate Move Face Feature (C#) (Rotate_Move_Face_Feature_Example_CSharp.htm)

## See Also

- `IMoveFaceFeatureData.IGetTriadRotationParameters`
- `IMoveFaceFeatureData.ISetTriadRotationParameters`