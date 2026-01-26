---
type: method
interface: IGtol
member: GetFrameCount
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameSymbols2
  - IGtol.GetFrameValues
  - IGtol.IGetFrameDiameterSymbols
  - IGtol.IGetFrameSymbols2
  - IGtol.IGetFrameValues
  - IGtol.SetFrameSymbols2
  - IGtol.SetFrameValues
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - getframecount
  - igtol
  - gtol
  - count
  - int16
  - igtolframe
---

# IGtol.GetFrameCount

Gets the number of frames in this GTol symbol.

## Signature

```csharp
System.Int16 GetFrameCount()
```
## Parameters

None.

## Return Value

Number of frames in this GTol symbol

## Remarks

This method returns the number of frames that this symbol has stored, which may be different than the number of frames that actually appear when this frame is displayed. This is because symbols can be created, either through the user interface or the API, with empty frames or rows, which do not appear when the frame is displayed.
For example, the symbol can be displayed with three 3 frames, but upon examination, it could be that those are frames 1, 2, and 5. Frames 3 and 4 are empty. Every symbol must have at least 2 frames.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)

## See Also

- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameDiameterSymbols`
- `IGtol.IGetFrameSymbols2`
- `IGtol.IGetFrameValues`
- `IGtol.SetFrameSymbols2`
- `IGtol.SetFrameValues`