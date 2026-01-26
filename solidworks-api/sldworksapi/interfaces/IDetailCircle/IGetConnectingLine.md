---
type: method
interface: IDetailCircle
member: IGetConnectingLine
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetConnectingLine
keywords:
  - igetconnectingline
  - idetailcircle
  - detail
  - circle
  - connecting
  - line
  - double
---

# IDetailCircle.IGetConnectingLine

Gets the end point coordinates of the connecting line

## Signature

```csharp
System.Double IGetConnectingLine()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 6 doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `IDetailCircle.GetConnectingLine`