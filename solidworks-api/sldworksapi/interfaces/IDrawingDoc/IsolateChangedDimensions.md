---
type: method
interface: IDrawingDoc
member: IsolateChangedDimensions
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related: []
keywords:
  - dimension
  - see
  - also
  - idimension
  - isolate
  - isolatechangeddimensions
  - idrawingdoc
  - drawing
  - doc
  - changed
  - dimensions
  - void
  - vb
  - net
  - vba
---

# IDrawingDoc.IsolateChangedDimensions

Isolates changed dimensions.

## Signature

```csharp
void IsolateChangedDimensions()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method only works with drawings saved in SOLIDWORKS 2012 and later.
To isolate changed dimensions:
Call
ISldWorks::SetUserPreferenceToggle
and set its UserPreferenceValue argument to
swUserPreferenceToggle_e.swUseChangedDimensions and its OnFlag argument to true.
Call IDrawingDoc::IsolateChangedDimensions.

## Examples

- Isolate Changed Dimension (C#) (Isolate_Changed_Dimension_Example_CSharp.htm)
- Isolate Changed Dimension (VB.NET) (Isolate_Changed_Dimension_Example_VBNET.htm)
- Isolate Changed Dimension (VBA) (Isolate_Changed_Dimension_Example_VB.htm)