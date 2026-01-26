---
type: method
interface: IModelDoc2
member: GetLines
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetLineCount
  - IModelDoc2.IGetLines
keywords:
  - lines
  - sketch
  - see
  - also
  - isketch
  - getlines
  - imodeldoc2
  - model
  - doc2
  - object
---

# IModelDoc2.GetLines

Gets all of the lines in the current sketch.

## Signature

```csharp
System.Object GetLines()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
LineType, StartPtX, StartPtY, StartPtZ, EndPtX, EndPtY, EndPtZ
,
... ]
where this array of 7 values repeats itself for each line in the current sketch. The number of doubles returned is (
lineCount
* 7). To determine the number of lines in the current sketch, use
IModelDoc2::GetLineCount
.
See
swLineTypes_e
for valid line types.

## See Also

- `IModelDoc2.GetLineCount`
- `IModelDoc2.IGetLines`