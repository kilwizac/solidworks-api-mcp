---
type: method
interface: IDatumOrigin
member: IGetAxisPoints2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumOrigin.GetAxisPoints2
  - IDatumOrigin.ISetAxisPoints
  - IDatumOrigin.SetAxisPoints
keywords:
  - axes
  - hole
  - table
  - datum
  - origin
  - igetaxispoints2
  - idatumorigin
  - axis
  - points2
  - double
---

# IDatumOrigin.IGetAxisPoints2

Gets the points that define the geometry of this datum origin.

## Signature

```csharp
System.Double IGetAxisPoints2()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 8 doubles is 4 (X,Y) coordinates in drawing space: The first coordinate (array items 0 and 1) is the start of the X leader portion of the symbol. The second coordinate (array items 2 and 3) is the tip of the arrowhead on the X leader portion of the symbol. The third coordinate (array items 4 and 5) is the start of the Y leader portion of the symbol. The fourth coordinate (array items 6 and 7) is the tip of the arrowhead on the Y leader portion of the symbol. VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IDatumOrigin.GetAxisPoints2`
- `IDatumOrigin.ISetAxisPoints`
- `IDatumOrigin.SetAxisPoints`