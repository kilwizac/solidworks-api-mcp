---
type: method
interface: IModelDocExtension
member: ReleaseStream
returns: System.Boolean
parameters:
  -
    name: StreamType
    type: System.Int32
    description: 1 = material stream
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - stream
  - release
  - releasestream
  - imodeldocextension
  - model
  - doc
  - extension
  - type
  - int32
  - boolean
---

# IModelDocExtension.ReleaseStream

Releases a previously obtained stream.

## Signature

```csharp
System.Boolean ReleaseStream( 
   System.Int32
StreamType
)
```
## Parameters

- `StreamType` (System.Int32): 1 = material stream

## Return Value

True if stream is released, false if not

## Remarks

To obtain the stream, call
IModelDocExtension::GetStream
.
VB Example
This example illustrates attaching an XML document to a stream, and then releasing the stream.
Dim swApp As Object
Sub main()
Set swApp = Application.SldWorks
Dim docext As SldWorks.ModelDocExtension
Set docext = swApp.ActiveDoc.Extension
Dim xmldoc As MSXML2.DOMDocument
Set xmldoc = CreateObject("MSXML2.DOMDocument")
Dim stat As Boolean
Dim stream
Set stream = docext.
GetStream
(1, stat)
xmldoc.Load (stream)
docext.
ReleaseStream
(1)
xmldoc.Save ("C:\temp\xmlmat.xml")
End Sub
C++ Example
//--------
CComPtr<IModelDocExtension> ext;
m_iModelDoc2->get_Extension(&ext);
LPSTREAM stream = NULL;
VARIANT_BOOL access = 0;
ext->
IGetStream
(1, &access, &stream);
// Your code
if (stream)
{
VARIANT_BOOL status;
ext->
IReleaseStream
(1, &status);
stream->Release();
}
//--------