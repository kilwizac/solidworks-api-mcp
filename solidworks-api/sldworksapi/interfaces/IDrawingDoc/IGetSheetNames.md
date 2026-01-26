---
type: method
interface: IDrawingDoc
member: IGetSheetNames
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of drawing sheets in this drawing (see Remarks)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateSheet
  - IDrawingDoc.EditSheet
  - IDrawingDoc.GetCurrentSheet
  - IDrawingDoc.GetSheetNames
  - IDrawingDoc.IGetCurrentSheet
  - IDrawingDoc.NewSheet3
  - IDrawingDoc.SetupSheet4
  - ISheet
keywords:
  - sheet
  - see
  - also
  - isheet
  - names
  - name
  - igetsheetnames
  - idrawingdoc
  - drawing
  - doc
  - count
  - int32
  - string
---

# IDrawingDoc.IGetSheetNames

Gets a list of the names of the drawing sheets in this drawing.

## Signature

```csharp
System.String IGetSheetNames( 
   out System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of drawing sheets in this drawing (see Remarks)

## Return Value

in-process, unmanaged C++: Pointer to an array containing the names of the drawing sheets in this drawing of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The argument Count is used to help prevent memory overwrites. First call
IDrawingDoc::GetSheetCount
to get the number of sheets in this drawing. Then use its return value to dimension the return value array.
This method compares the number of sheets in this part with the value passed in.
If the actual number of sheets is...
Then...
Larger than the value passed in
no sheets are returned, and status returns S_ERROR.
Smaller than this value
the names of all of the sheets in the return value is returned and changes Count to reflect the actual number of sheets.

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.EditSheet`
- `IDrawingDoc.GetCurrentSheet`
- `IDrawingDoc.GetSheetNames`
- `IDrawingDoc.IGetCurrentSheet`
- `IDrawingDoc.NewSheet3`
- `IDrawingDoc.SetupSheet4`
- `ISheet`