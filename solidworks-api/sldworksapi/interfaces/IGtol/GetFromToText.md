---
type: method
interface: IGtol
member: GetFromToText
returns: System.Boolean
parameters:
  -
    name: FromText
    type: System.String
    description: From text label
  -
    name: ToText
    type: System.String
    description: To text label
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.SetFromToText
keywords:
  - getfromtotext
  - igtol
  - gtol
  - text
  - string
  - boolean
  - igtolframe
---

# IGtol.GetFromToText

Gets the From-To text of this Gtol.

## Signature

```csharp
System.Boolean GetFromToText( 
   out System.String
FromText
,
   out System.String
ToText
)
```
## Parameters

- `FromText` (System.String): From text label
- `ToText` (System.String): To text label

## Return Value

True if From-To text successfully retrieved, false if not

## Remarks

The From-To symbol:
is present below the Gtol frame.
specifies that the Gtol value applies from one point or entity to another.
Before calling this method, use
IGtol::GetFromTo
to determine whether the From-To symbol is present.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)

## See Also

- `IGtol.SetFromToText`