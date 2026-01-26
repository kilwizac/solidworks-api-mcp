---
type: method
interface: IWeldSymbol
member: SetProcess
returns: System.Boolean
parameters:
  -
    name: Process
    type: System.Boolean
    description: True to set the indication of welding process flag, false to not
  -
    name: Text
    type: System.String
    description: Text related to the indication of welding process
  -
    name: Reference
    type: System.Boolean
    description: True to place a reference box around the process text, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.SetText
keywords:
  - setprocess
  - iweldsymbol
  - weld
  - symbol
  - process
  - boolean
  - text
  - string
  - reference
---

# IWeldSymbol.SetProcess

Sets the values related to the indication of welding process for this weld symbol.

## Signature

```csharp
System.Boolean SetProcess( 
   System.Boolean
Process
,
   System.String
Text
,
   System.Boolean
Reference
)
```
## Parameters

- `Process` (System.Boolean): True to set the indication of welding process flag, false to not
- `Text` (System.String): Text related to the indication of welding process
- `Reference` (System.Boolean): True to place a reference box around the process text, false to not

## Return Value

True if the indication of welding process is set, false if not

## Remarks

Get:
Flag that indicates whether the indication of welding process flag is set on this weld symbol using
IWeldSymbol::GetProcess
.
Text related to the indication of welding process using
IWeldSymbol::GetText
.
Flag that indicates whether a reference box exists around this text using
IWeldSymbol::GetProcessReference
.
The text and reference box are visible if Process is true.

## Examples

- IWeldSymbol (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldSymbol)

## See Also

- `IWeldSymbol.SetText`