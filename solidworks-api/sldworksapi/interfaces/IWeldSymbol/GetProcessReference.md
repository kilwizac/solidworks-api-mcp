---
type: method
interface: IWeldSymbol
member: GetProcessReference
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.SetText
keywords:
  - getprocessreference
  - iweldsymbol
  - weld
  - symbol
  - process
  - reference
  - boolean
---

# IWeldSymbol.GetProcessReference

Gets whether there is a reference box around the indication of welding process text.

## Signature

```csharp
System.Boolean GetProcessReference()
```
## Parameters

None.

## Return Value

True if there is a reference box around the process text, false if not

## Remarks

Get:
Flag that tells whether or not the indication of welding process flag is set on this weld symbol using
IWeldSymbol::GetProcess
.
Text related to the indication of welding process using
IWeldSymbol::GetText
.
Set all of the indication of welding process values (flag, text, and reference) using
IWeldSymbol::SetProcess
.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)

## See Also

- `IWeldSymbol.SetText`