---
type: method
interface: IMoveFaceFeatureData
member: IGetTriadRotationParameters
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData.ISetTriadRotationParameters
  - IMoveFaceFeatureData.TriadRotationParameters
keywords:
  - igettriadrotationparameters
  - imovefacefeaturedata
  - move
  - face
  - feature
  - data
  - triad
  - rotation
  - parameters
  - double
---

# IMoveFaceFeatureData.IGetTriadRotationParameters

Gets the rotation parameters for this Move Face feature.

## Signature

```csharp
System.Double IGetTriadRotationParameters()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of six doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The first three doubles returned are the X, Y, and Z rotation origin parameters. The remaining three doubles returned are the X, Y, and Z rotation angle parameters.

## See Also

- `IMoveFaceFeatureData.ISetTriadRotationParameters`
- `IMoveFaceFeatureData.TriadRotationParameters`