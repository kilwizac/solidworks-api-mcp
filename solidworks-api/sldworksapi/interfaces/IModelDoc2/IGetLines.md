---
type: method
interface: IModelDoc2
member: IGetLines
returns: System.Double
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
  - IModelDoc2.GetLines
keywords:
  - lines
  - sketch
  - see
  - also
  - isketch
  - igetlines
  - imodeldoc2
  - model
  - doc2
  - double
---

# IModelDoc2.IGetLines

Gets all of the lines in the current sketch.

## Signature

```csharp
System.Double IGetLines()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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
- `IModelDoc2.GetLines`