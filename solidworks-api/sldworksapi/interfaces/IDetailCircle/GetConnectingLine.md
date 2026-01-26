---
type: method
interface: IDetailCircle
member: GetConnectingLine
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.IGetConnectingLine
keywords:
  - getconnectingline
  - idetailcircle
  - detail
  - circle
  - connecting
  - line
  - object
---

# IDetailCircle.GetConnectingLine

Gets the end point coordinates of the connecting line for this detail circle.

## Signature

```csharp
System.Object GetConnectingLine()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

This is only valid if there is a connecting line. Use
IDetailCircle::GetStyle
to determine if this detail circle is valid for this command.
retval[0]
X-coordinate of first connecting line point
retval[1]
Y-coordinate of first connecting line point
retval[2]
Z-coordinate of first connecting line point
retval[3]
X-coordinate of second connecting line point
retval[4]
Y-coordinate of second connecting line point
retval[5]
Z-coordinate of second connecting line point

## See Also

- `IDetailCircle.IGetConnectingLine`