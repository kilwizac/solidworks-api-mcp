---
type: method
interface: IMoveFaceFeatureData
member: ISetTriadRotationParameters
returns: void
parameters:
  -
    name: RotationParameters
    type: System.Double
    description: in-process, unmanaged C++: pointer to an array of six doubles for the rotation parameters (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.IGetTriadRotationParameters
  - IMoveFaceFeatureData.TriadRotationParameters
keywords:
  - isettriadrotationparameters
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - triad
  - rotation
  - parameters
  - double
  - void
---

# IMoveFaceFeatureData.ISetTriadRotationParameters

Sets the rotation parameters for this Move Face feature.

## Signature

```csharp
void ISetTriadRotationParameters( 
   ref System.Double
RotationParameters
)
```
## Parameters

- `RotationParameters` (System.Double): in-process, unmanaged C++: pointer to an array of six doubles for the rotation parameters (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The first three doubles are the X, Y, and Z rotation origin parameters. The remaining three doubles are the X, Y, and Z rotation angle parameters.

## See Also

- `IMoveFaceFeatureData.IGetTriadRotationParameters`
- `IMoveFaceFeatureData.TriadRotationParameters`