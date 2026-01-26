---
type: method
interface: ISketch
member: GetLineCount2
returns: System.Int32
parameters:
  -
    name: CrossHatchOption
    type: System.Int16
    description: Crosshatch option as defined in swCrossHatchFilter_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - entities
  - lines
  - see
  - also
  - isketch
  - sketches
  - getlinecount2
  - line
  - count2
  - cross
  - hatch
  - option
  - int16
  - int32
  - vba
  - polylines
  - information
---

# ISketch.GetLineCount2

Gets the number of lines in the sketch with an option to exclude or include crosshatch lines.

## Signature

```csharp
System.Int32 GetLineCount2( 
   System.Int16
CrossHatchOption
)
```
## Parameters

- `CrossHatchOption` (System.Int16): Crosshatch option as defined in swCrossHatchFilter_e

## Return Value

Number of lines

## Remarks

Call this method before calling
ISketch::IGetLines2
to determine the size of the array for that method.

## Examples

- Get Lines in Sketch (VBA) (Get_Lines_in_Sketch_Example_VB.htm)
- Get Polylines Information (VBA) (Get_Polylines_Information_Example_VB.htm)