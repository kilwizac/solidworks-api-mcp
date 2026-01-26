---
type: property
interface: ITexture
member: MaterialName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - materialname
  - itexture
  - texture
  - material
  - name
  - string
readonly: null
---

# ITexture.MaterialName

Gets or sets the path and file name of the texture material.

## Signature

```csharp
System.String MaterialName {get; set;}
```
## Parameters

None.

## Return Value

Path and file name of the texture (see Remarks )

## Remarks

If the texture is a SOLIDWORKS-supplied texture, then the path returned is:
install_dir
\data\I
mages
\
textures
\
texture_library
\
texture_type
\
texture_image_file
For example,
install_dir
\data\Images\textures\plastic\brushed\bred.jpg
.
If the texture is user-defined texture, then the path returned is:
drive
:
\
path_name
\
texture_image_file
For example,
D:\MyTextures\gear.jpg
.
Call this property before calling
ITexture::GetSystemTextureName
to obtain a value for FileNameIn.

## Examples

- ITexture (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITexture)