---
type: method
interface: IModeler
member: GetInitKnitGapWidth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.SetInitKnitGapWidth
keywords:
  - knit
  - bodies
  - sew
  - see
  - also
  - ibody2
  - getinitknitgapwidth
  - imodeler
  - modeler
  - init
  - gap
  - width
  - double
---

# IModeler.GetInitKnitGapWidth

Gets the initial gap bound width for knitting a body.

## Signature

```csharp
System.Double GetInitKnitGapWidth()
```
## Parameters

None.

## Return Value

Initial knitting gap width used for body sewing

## Remarks

This value is 0 until a call to knit a body is made.

## See Also

- `IModeler.SetInitKnitGapWidth`