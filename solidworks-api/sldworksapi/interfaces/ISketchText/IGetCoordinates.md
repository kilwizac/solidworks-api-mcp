---
type: method
interface: ISketchText
member: IGetCoordinates
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchText.GetCoordinates
keywords:
  - igetcoordinates
  - isketchtext
  - sketch
  - text
  - coordinates
  - double
---

# ISketchText.IGetCoordinates

Gets the position of this sketch text.

## Signature

```csharp
System.Double IGetCoordinates()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 3 double values, the x,y,z coordinate of the sketch text VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To set the position of this sketch text, use
ISketchText::SetCoordinates
.

## See Also

- `ISketchText.GetCoordinates`