---
type: method
interface: INote
member: SetBalloonPadding
returns: System.Boolean
parameters:
  -
    name: Padding
    type: System.Double
    description: Balloon padding
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetBalloonOptions
  - INote.GetBalloonPadding
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - notes
  - note
  - inote
  - setballoonpadding
  - balloon
  - padding
  - double
  - boolean
---

# INote.SetBalloonPadding

Sets the padding for this balloon note.

## Signature

```csharp
System.Boolean SetBalloonPadding( 
   System.Double
Padding
)
```
## Parameters

- `Padding` (System.Double): Balloon padding

## Return Value

True if padding is successfully set, false if not

## Remarks

This method is valid only if
INote::GetBalloonSize
is set to
swBalloonFit_e
.swBF_Tightest.

## See Also

- `INote.GetBalloonOptions`
- `INote.GetBalloonPadding`