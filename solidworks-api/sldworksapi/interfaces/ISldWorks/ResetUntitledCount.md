---
type: method
interface: ISldWorks
member: ResetUntitledCount
returns: System.Int32
parameters:
  -
    name: PartValue
    type: System.Int32
    description: Starting index for part documents
  -
    name: AssemValue
    type: System.Int32
    description: Starting index for assembly documents
  -
    name: DrawingValue
    type: System.Int32
    description: Starting index for drawing documents
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - resetuntitledcount
  - isldworks
  - sld
  - works
  - reset
  - untitled
  - count
  - part
  - value
  - int32
  - assem
  - drawing
  - document
  - vba
  - vb
  - net
---

# ISldWorks.ResetUntitledCount

Resets the index of untitled documents.

## Signature

```csharp
System.Int32 ResetUntitledCount( 
   System.Int32
PartValue
,
   System.Int32
AssemValue
,
   System.Int32
DrawingValue
)
```
## Parameters

- `PartValue` (System.Int32): Starting index for part documents
- `AssemValue` (System.Int32): Starting index for assembly documents
- `DrawingValue` (System.Int32): Starting index for drawing documents

## Return Value

Total number of successful resets

## Remarks

Use this method to reset untitled document indexes so that playbacks of the macro recorder increment untitled documents in a reproducible fashion.
For example, if the first playback of a macro creates Part1 and Part2, then the second playback may fail because it creates Part3 and Part4 instead of Part1 and Part2.
To ensure reproducible results, call ISldWorks::ResetUntitledCount at the beginning or end of a macro program.

## Examples

- Reset Untitled Document Count (VBA) (Reset_Untitled_Document_Count_Example_VB.htm)
- Reset Untitled Document Count (VB.NET) (Reset_Untitled_Document_Count_Example_VBNET.htm)
- Reset Untitled Document Count (C#) (Reset_Untitled_Document_Count_Example_CSharp.htm)