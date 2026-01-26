---
type: method
interface: IMassProperty
member: IGetCenterOfMass
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IMassProperty.CenterOfMass
keywords:
  - igetcenterofmass
  - imassproperty
  - mass
  - center
  - double
---

# IMassProperty.IGetCenterOfMass

Gets the center of mass for this model.

## Signature

```csharp
System.Double IGetCenterOfMass()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of size 3 (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method returns metric units unless explicitly specified otherwise.
The return value is a 0-based array of doubles as follows:
[
X, Y, Z
]

## See Also

- `IMassProperty.CenterOfMass`