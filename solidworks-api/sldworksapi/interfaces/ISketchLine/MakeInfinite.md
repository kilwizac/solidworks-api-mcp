---
type: method
interface: ISketchLine
member: MakeInfinite
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchLine.Infinite
keywords:
  - lines
  - infinite
  - makeinfinite
  - isketchline
  - sketch
  - line
  - make
  - boolean
  - vba
---

# ISketchLine.MakeInfinite

Makes a line infinite.

## Signature

```csharp
System.Boolean MakeInfinite()
```
## Parameters

None.

## Return Value

True if the line is changed to infinite, false if not

## Remarks

When you change a line from finite to infinite, you cannot change it back to finite.

## Examples

- Make Line Infinite (VBA) (Make_Line_Infinite_Example_VB.htm)

## See Also

- `ISketchLine.Infinite`