---
type: method
interface: IGtol
member: SetFromToText
returns: System.Boolean
parameters:
  -
    name: EnableFromTo
    type: System.Boolean
    description: True to enable From-To symbol
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
  - IGtol.GetFromToText
keywords:
  - setfromtotext
  - igtol
  - gtol
  - text
  - enable
  - boolean
  - string
  - igtolframe
---

# IGtol.SetFromToText

Adds a From-To symbol and sets the From-To text for this Gtol.

## Signature

```csharp
System.Boolean SetFromToText( 
   System.Boolean
EnableFromTo
,
   System.String
FromText
,
   System.String
ToText
)
```
## Parameters

- `EnableFromTo` (System.Boolean): True to enable From-To symbol
- `FromText` (System.String): From text label
- `ToText` (System.String): To text label

## Return Value

True if From-To text successfully set, false if not

## Remarks

The From-To symbol:
is present below the Gtol frame.
specifies that the Gtol value applies from one point or entity to another.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)

## See Also

- `IGtol.GetFromToText`