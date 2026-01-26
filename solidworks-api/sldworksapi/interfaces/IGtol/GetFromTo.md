---
type: method
interface: IGtol
member: GetFromTo
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getfromto
  - igtol
  - gtol
  - boolean
  - igtolframe
---

# IGtol.GetFromTo

Gets whether the From-To symbol is present in this Gtol.

## Signature

```csharp
System.Boolean GetFromTo()
```
## Parameters

None.

## Return Value

True if From-To symbol is present, false if not

## Remarks

The From-To symbol:
is present below the Gtol frame.
specifies that the Gtol value applies from one point or entity to another.
If this method returns true, then call
IGtol::GetFromToText
and
IGtol::SetFromToText
to retrieve and set the From-To labels for this Gtol.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)